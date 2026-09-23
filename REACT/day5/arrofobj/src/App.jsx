const App = () => {

  const studentinfo = [
    { name: "Akash", Age: 20, course: "BCA" },
    { name: "Vicky", Age: 20, course: "BCA" },
    { name: "Tamil", Age: 20, course: "BCA" },
    { name: "Bharathi", Age: 20, course: "BCA" },
    { name: "Abi", Age: 20, course: "BCA" },
    { name: "Ebi", Age: 20, course: "BCA" }
  ];

  return (
    <>
      <div className="bg-amber-400 flex justify-between items-center p-4" >

        {studentinfo.map((e, i) => {
          return (
            <div className="card bg-white text-black p-3 rounded-2xl" key={i}>
              <h2>{e.name}</h2>
              <p>Age: {e.Age}</p>
              <p>Course: {e.course}</p>
            </div>
          );
        })}

      </div>
    </>
  );
};

export default App;