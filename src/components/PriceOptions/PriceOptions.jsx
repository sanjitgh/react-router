import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      feature: [
        "Gym equipment access",
        "Locker room and showers",
        "1 free assessment",
        "Standard hours access",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Membership",
      feature: [
        "All gym facilities",
        "Group classes included",
        "Steam room access",
        "2 free assessments",
        "Extended hours access",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Membership",
      feature: [
        "All Standard features",
        "2 personal training sessions",
        "Sauna access",
        "2 guest passes",
        "Unlimited classes",
        "Priority booking",
      ],
      price: 79.99,
    },
    {
      id: 4,
      name: "VIP Membership",
      feature: [
        "All Premium features",
        "24/7 access",
        "Dedicated locker",
        "Free supplements",
        "Monthly analysis",
        "Towel and water service",
        "VIP lounge access",
      ],
      price: 99.99,
    },
    {
      id: 5,
      name: "Day Pass",
      feature: [
        "One-day gym access",
        "Locker room and showers",
        "Standard equipment",
        "Group classes for the day",
      ],
      price: 10.0,
    },
    {
      id: 6,
      name: "Week Pass",
      feature: [
        "One-week gym access",
        "Locker room and showers",
        "Standard equipment",
        "Group classes for the week",
        "Sauna access for the week",
      ],
      price: 25.0,
    },
  ];

  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl my-10 text-slate-700 font-bold">
        The best price in the town.
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-10">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
