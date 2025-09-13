const PricingCard = ({ plan }) => {
  const Icon = plan.icon;

  return (
    <div className="relative w-full max-w-sm px-10 py-10 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-[#FEF6DB]">
      {/* Icon */}
      <div className="mb-6">
        <h2 className="text-xl font-jost font-bold text-[#111111]">
          {plan.title}
        </h2>
        <div
          className="mt-4 p-5 rounded-full inline-block"
          style={{ backgroundColor: plan.bgIcon }}
        >
          <Icon className="w-12 h-12" style={{ color: plan.iconColor }} />
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-baseline">
        <p className="font-jost text-xl font-bold text-[#111111]">
          {plan.price}
        </p>
        <p className="text-sm font-medium text-[#747578]">{plan.duration}</p>
      </div>

      {/* Features */}
      <ul className="w-full text-[#747578] text-sm font-inter mb-8 space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center justify-center">
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <a href="#home">
        <button className="bg-white text-black border uppercase font-jost font-normal px-6 py-2 rounded-sm hover:text-[#F3C522] hover:bg-black transition-all duration-300">
          CHOOSE PLAN
        </button>
      </a>
    </div>
  );
};

export default PricingCard;
