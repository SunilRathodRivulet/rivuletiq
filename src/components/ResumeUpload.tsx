import { useState } from 'react';
import { Upload, FileText, X, Send } from 'lucide-react';

export default function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        alert('Please select a PDF, DOC, or DOCX file.');
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSendResume = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    
    // Create a mailto link with subject and body
    const subject = encodeURIComponent('Resume Submission - Job Application');
    const body = encodeURIComponent(`Hello HR Team,\n\nI am interested in joining the RivuletIQ team. Please find my resume attached.\n\nBest regards`);
    const mailtoLink = `mailto:hr@rivuletiq.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset after a delay
    setTimeout(() => {
      setIsUploading(false);
      setSelectedFile(null);
    }, 2000);
  };

  return (
    <div className="glass-panel p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-vivid-orange" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Send Your Resume</h3>
        <p className="text-neutral-300">Upload your resume and we'll help you send it to our HR team</p>
      </div>

      <div className="space-y-6">
        {/* File Upload Area */}
        <div className="border-2 border-dashed border-vivid-orange/30 rounded-lg p-8 text-center hover:border-vivid-orange/50 transition-colors">
          <input
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />
          <label htmlFor="resume-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-vivid-orange mx-auto mb-4" />
            <p className="text-white font-medium mb-2">Click to select your resume</p>
            <p className="text-neutral-400 text-sm">PDF, DOC, or DOCX files only</p>
          </label>
        </div>

        {/* Selected File Display */}
        {selectedFile && (
          <div className="flex items-center justify-between p-4 bg-vivid-orange/5 border border-vivid-orange/20 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-vivid-orange" />
              <div>
                <p className="text-white font-medium">{selectedFile.name}</p>
                <p className="text-neutral-400 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-2 hover:bg-vivid-orange/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        )}

        {/* Send Button */}
        <button
          onClick={handleSendResume}
          disabled={!selectedFile || isUploading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isUploading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send to HR Team
            </>
          )}
        </button>

        {/* Info Note */}
        <div className="text-center">
          <p className="text-neutral-400 text-sm">
            Your resume will be sent to <span className="text-vivid-orange font-medium">hr@rivuletiq.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
