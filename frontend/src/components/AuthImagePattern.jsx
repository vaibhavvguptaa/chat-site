const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-10 mt-16  overflow-hidden">
      <div className="max-w-sm text-center">
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-base-content/70 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
