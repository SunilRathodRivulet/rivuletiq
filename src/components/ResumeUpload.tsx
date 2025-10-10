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
    <div className="glass-panel p-4 sm:p-6 lg:p-8 h-full flex flex-col">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 transition-all duration-300">
          <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-vivid-orange" />
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">Send Your Resume</h3>
        <p className="text-neutral-300 text-sm sm:text-base">Upload your resume and we'll help you send it to our HR team</p>
      </div>

      <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
        {/* File Upload Area */}
        <div className="group">
          <div className="border-2 border-dashed border-vivid-orange/30 rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:border-vivid-orange/50 hover:bg-vivid-orange/5 transition-all duration-300">
            <input
              type="file"
              id="resume-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="hidden"
            />
            <label htmlFor="resume-upload" className="cursor-pointer block">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-vivid-orange/20 group-hover:border-vivid-orange/40 transition-all duration-300">
                <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-vivid-orange" />
              </div>
              <p className="text-white font-medium mb-2 text-sm sm:text-base lg:text-lg">Click to select your resume</p>
              <p className="text-neutral-400 text-xs sm:text-sm">PDF, DOC, or DOCX files only (Max 10MB)</p>
            </label>
          </div>
        </div>

        {/* Selected File Display */}
        {selectedFile && (
          <div className="flex items-center justify-between p-4 sm:p-6 bg-vivid-orange/5 border border-vivid-orange/20 rounded-xl hover:bg-vivid-orange/10 transition-all duration-300">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-vivid-orange" />
              </div>
              <div>
                <p className="text-white font-medium text-sm sm:text-base lg:text-lg">{selectedFile.name}</p>
                <p className="text-neutral-400 text-xs sm:text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-2 sm:p-3 hover:bg-vivid-orange/10 rounded-lg transition-colors group"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        )}

        {/* Send Button */}
        <button
          onClick={handleSendResume}
          disabled={!selectedFile || isUploading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg py-3 sm:py-4 hover:bg-vivid-orange/90 transition-colors"
        >
          {isUploading ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              Send to HR Team
            </>
          )}
        </button>

        {/* Info Note */}
        <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 mt-auto">
          <p className="text-neutral-300 text-xs sm:text-sm">
            Your resume will be sent to <span className="text-vivid-orange font-medium">hr@rivuletiq.com</span>
          </p>
          <p className="text-neutral-400 text-xs mt-1">We'll review your application and get back to you within 3-5 business days</p>
        </div>
      </div>
    </div>
  );
}
