import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [shareFileData, setShareFileData] = useState(null);

  const [search, setSearch] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/files/my-files", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFiles(res.data.files);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/files/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      fetchFiles();

      setSelectedFile(null);
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);
    
      alert(err.response?.data?.message || err.message);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const deleteFile = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this file?"
    );
  
    if (!confirmDelete) return;
  
    try {
      const token = localStorage.getItem("token");
  
      const res = await API.delete(`/files/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      alert(res.data.message);
  
      // List refresh
      fetchFiles();
  
    } catch (err) {
      console.log(err);
  
      alert(
        err.response?.data?.message ||
        "Delete Failed"
      );
    }
  };


  const shareFile = (file) => {
    setShareFileData(file);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171c24] via-[#1d2430] to-[#10141c] text-white">

      <div className="flex items-center justify-between border-b border-white/10 px-10 py-6">

        <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
  Secure File Sharing Dashboard
</h1>

<p className="mt-3 text-lg text-gray-400">
  Welcome back,
  <span className="ml-2 font-bold text-[#f0533a]">
    {user?.name}
  </span>
</p>
        </div>

        <button
          onClick={logout}
          className="rounded-xl bg-[#f0533a] px-7 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#ff684b]"
        >
          Logout
        </button>

      </div>

      <div className="grid gap-6 p-10 md:grid-cols-3">

        <div className="rounded-2xl bg-[#202630] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-sm uppercase tracking-wider text-gray-400">My Files</h2>

        <p className="mt-5 text-6xl font-black text-[#f0533a]">
            {files.length}
          </p>
        </div>

        <div className="rounded-2xl bg-[#202630] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-sm uppercase tracking-wider text-gray-400">Downloads</h2>

        <p className="mt-5 text-6xl font-black text-[#f0533a]">
            0
          </p>
        </div>

        <div className="rounded-2xl bg-[#202630] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-sm uppercase tracking-wider text-gray-400">Shared Links</h2>

        <p className="mt-5 text-6xl font-black text-[#f0533a]">
            0
          </p>
        </div>

      </div>

      <div className="px-12 pb-12">

      <div className="rounded-2xl bg-[#202630] p-8 shadow-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Upload Secure File
          </h2>

          <input
            type="file"
            onChange={(e) =>
              setSelectedFile(e.target.files[0])
            }
            className="mb-6 block w-full rounded-xl border border-gray-700 bg-[#171c24] p-4 text-white outline-none transition focus:border-[#f0533a] focus:ring-2 focus:ring-[#f0533a]"
          />

          <button
            onClick={uploadFile}
            disabled={uploading}
            className="rounded-xl bg-[#f0533a] px-8 py-4 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#ff684b]"
          >
            {uploading ? "Uploading..." : "Upload File"}
          </button>

          {selectedFile && (
            <div className="mt-6 rounded-lg bg-[#171c24] p-4">

              <p className="font-bold text-[#f0533a]">
                Selected File
              </p>

              <p className="mt-2 text-gray-300">
                {selectedFile.name}
              </p>

              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>

            </div>
          )}

        </div>

      </div>
      <div className="px-10 pb-10">

<h2 className="mb-6 text-2xl font-bold">
  My Uploaded Files
</h2>

<div className="mb-6">

  <input
    type="text"
    placeholder="🔍 Search files..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-2xl border border-gray-700 bg-[#202630] px-5 py-4 text-white shadow-md outline-none transition focus:border-[#f0533a] focus:ring-2 focus:ring-[#f0533a]"
  />

</div>

{files.length === 0 ? (

  <div className="rounded-xl bg-[#202630] p-6 text-center text-gray-400">

    No files uploaded yet.

  </div>

) : (

  <div className="space-y-4">

{files
  .filter((file) =>
    file.fileName
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((file) => (

      <div
        key={file._id}
        className="flex items-center justify-between rounded-2xl bg-[#202630] p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
      >

        <div>

          <h3 className="text-xl font-bold text-white">
            {file.fileName}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {(file.fileSize / 1024).toFixed(2)} KB
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {new Date(file.createdAt).toLocaleString()}
          </p>

        </div>

        <div className="flex gap-3">

          <a
            href={`${import.meta.env.VITE_API_URL}/files/share/${file._id}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-600 px-5 py-3 font-bold shadow transition hover:scale-105 hover:bg-green-700"
          >
            Download
          </a>

          <button
  onClick={() => shareFile(file)}
  className="rounded-xl bg-blue-600 px-5 py-3 font-bold shadow transition hover:scale-105 hover:bg-blue-700"
>
  Share
</button>

          <button
  onClick={() => deleteFile(file._id)}
  className="rounded-xl bg-red-600 px-5 py-3 font-bold shadow transition hover:scale-105 hover:bg-red-700"
>
  Delete
</button>

        </div>

      </div>

    ))}

  </div>

)}

</div>
{shareFileData && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

    <div className="w-[460px] rounded-3xl bg-[#202630]/95 backdrop-blur-xl p-8 shadow-2xl border border-white/10">

      <h2 className="text-2xl font-bold mb-6">
        Share File
      </h2>

      <button
        className="mb-3 w-full rounded-xl bg-[#f0533a] py-3 font-bold transition hover:scale-105"
        onClick={() => {
          navigator.clipboard.writeText(
            `https://secure-file-sharing-system-7qmx.onrender.com/api/files/share/${shareFileData._id}`
          );

          alert("Link Copied");
          setShareFileData(null);
        }}
      >
        📋 Copy Link
      </button>

      <button
        className="mb-3 w-full rounded-xl bg-green-600 py-3 font-bold transition hover:scale-105"
        onClick={() =>
          window.open(
            `https://wa.me/?text=https://secure-file-sharing-system-7qmx.onrender.com/api/files/share/${shareFileData._id}`
          )
        }
      >
        🟢 Share on WhatsApp
      </button>

      <button
        className="mb-3 w-full rounded-xl bg-red-600 py-3 font-bold transition hover:scale-105"
        onClick={() =>
          window.open(
            `mailto:?subject=Secure File&body=https://secure-file-sharing-system-7qmx.onrender.com/api/files/share/${shareFileData._id}`
          )
        }
      >
        📧 Share via Gmail
      </button>

      <button
        className="w-full rounded-xl bg-gray-600 py-3 font-bold transition hover:scale-105"
        onClick={() => setShareFileData(null)}
      >
        Close
      </button>

    </div>

  </div>
)}
</div>
);
}





export default Dashboard;