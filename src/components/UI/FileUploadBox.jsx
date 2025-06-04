const FileUploadBox = ({ file, onFileChange, id, labelText, innerText }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {labelText}
    </label>
    <label
      htmlFor={id}
      className="flex flex-col items-center justify-center w-full h-28 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50/50 hover:bg-green-50"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
        {file ? (
          <p className="font-semibold text-green-700">{file.name}</p>
        ) : (
          <>
            <p className="mb-2 text-sm text-gray-500">{innerText}</p>
            <p className="text-xs text-gray-400">JPG, PNG or PDF (Max 5MB)</p>
          </>
        )}
      </div>
      <input
        id={id}
        type="file"
        className="hidden"
        onChange={onFileChange}
        accept=".jpg,.jpeg,.png,.pdf"
      />
    </label>
  </div>
);

export default FileUploadBox;
