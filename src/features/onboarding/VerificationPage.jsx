import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FileUploadBox from "../../components/UI/FileUploadBox";
import PlantLeafImage from "../../assets/Plantleaf.png";

const VerificationPage = () => {
  const navigate = useNavigate();
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [gstFile, setGstFile] = useState(null);
  const [panFile, setPanFile] = useState(null);

  const handleFileChange = (e, setFile) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // This check is a fallback, but the button will be disabled anyway
    if (!gstNumber || !panNumber || !gstFile || !panFile) {
      console.log("Form is incomplete.");
      return;
    }
    const verificationData = {
      gstNumber,
      panNumber,
      gstFile: gstFile?.name,
      panFile: panFile?.name,
    };
    console.log("Verification Data Submitted:", verificationData);
    navigate("/invite-team");
  };

  // --- NEW: Validation Logic ---
  // The save button will be disabled if any of these fields are empty.
  const isSaveDisabled = !gstNumber || !panNumber || !gstFile || !panFile;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute top-0 right-0 mt-0 mr-0 hidden sm:block">
        <img
          src={PlantLeafImage}
          alt="Decorative Leaf"
          className="max-w-72 h-auto "
        />
      </div>
      <div className="w-full max-w-4xl mx-auto z-10 mt-10 sm:mt-0">
        <div className="text-center mb-10">
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              letterSpacing: "0.05em",
            }}
          >
            Add verification documents
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please provide your GST and PAN card details for verification.
          </p>
        </div>
        <form onSubmit={handleSave} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-8">
              <Input
                id="gstNumber"
                label="GST number"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                required
              />
              <FileUploadBox
                file={gstFile}
                onFileChange={(e) => handleFileChange(e, setGstFile)}
                id="gst-upload"
                labelText="Upload GST Document"
                innerText="Click to upload GST Document"
              />
            </div>
            <div className="space-y-8">
              <Input
                id="panNumber"
                label="Permanent Account Number (PAN)"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                required
              />
              <FileUploadBox
                file={panFile}
                onFileChange={(e) => handleFileChange(e, setPanFile)}
                id="pan-upload"
                labelText="Upload Pan card"
                innerText="Click to upload Pan card"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-12 space-y-4">
            <Button type="submit" fullWidth={false} disabled={isSaveDisabled}>
              Save
            </Button>
            <Button
              type="button"
              onClick={() => navigate("/invite-team")}
              variant="skip"
            >
              Skip for now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
