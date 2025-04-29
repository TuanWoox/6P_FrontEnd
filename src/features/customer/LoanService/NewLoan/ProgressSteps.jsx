

export default function ProgressSteps({ currentStep }) {
    return (
      <div className="flex justify-between items-center mb-4">
        <StepIndicator step={1} currentStep={currentStep} label="Khởi tạo" />
        <div className="flex-1 h-px bg-gray-300 mx-2"></div>
        <StepIndicator step={2} currentStep={currentStep} label="Xác nhận" />
        <div className="flex-1 h-px bg-gray-300 mx-2"></div>
        <StepIndicator step={3} currentStep={currentStep} label="Kết quả" />
      </div>
    );
  }
  
  function StepIndicator({ step, currentStep, label }) {
    return (
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${currentStep >= step ? 'bg-[#96C576]' : 'bg-gray-300'}`}>
          {step}
        </div>
        <span className="text-sm mt-1 text-gray-600">{label}</span>
      </div>
    );
  }
  