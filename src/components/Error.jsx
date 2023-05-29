const Error = ({mensaje}) => {
  return (
    <div className="p-2 bg-red-500 text-center text-white rounded-md m-2 uppercase font-bold">
      <p>{mensaje}</p>
    </div>
  );
};


export default Error;
