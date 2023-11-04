const TestBox = ({ img, name, job, color }) => {
  return (
    <div className="bg-secondBody border-4 transition-all duration-300 border-transparent  hover:border-secondBody hover:bg-transparent relative p-6 text-center rounded-lg">
      <i
        className={`fa-solid fa-quote-right text-yellow-500 absolute -top-4 left-10 text-3xl`}></i>
      <img className="w-[50px] h-[50px] rounded-full mx-auto" src={img} />
      <p className="my-4 text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores
        omnis, aliquam unde sint esse necessitatibus repudiandae voluptate
        vitae, iste totam quaerat deserunt! Quibusdam, quas?
      </p>
      <h3 className="text-white font-bold">{name}</h3>
      <h3 className="text-mainColor">{job}</h3>
    </div>
  );
};

export default TestBox;
