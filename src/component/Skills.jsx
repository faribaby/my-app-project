export default function SkillPage() {
  return (


    <section className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6">

      <div className="sectionTitle d-flex flex-row text-light">
        <h3>02.</h3>
        <h4>My Skills</h4>
      </div>

      <div className="row justify-content-center text-center text-lg-start align-items-center  bg-secondary rounded-1 mb-4">
        <div className="col-lg-8 col-12 p-2 p-lg-0">
          <h3 className="px-3">Artistic $ Visual Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Garnishing $ Presenting","Trend Awareness","Color Theory","Artistic Vision"].map(skill => (
              <span key={skill} className="bg-[#0a192f] px-3 py-1 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-secondary">
          <img src="/r.jpg" className="img-fluid" />

        </div>
      </div>
      <div className="row justify-content-center text-lg-start align-items-center bg-secondary rounded-1 mb-4">
        <div className="col-lg-8 col-12 p-2 p-lg-0">
          <h3 className="px-3"> Materials $ Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Material Knowledge","Contruction $ Technical Skills","Understing of Form"].map(skill => (
              <span key={skill} className="bg-[#0a192f] px-3 py-1 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-secondary">
          <img src="/y.jpg" className="img-fluid" />

        </div>
      </div>
      <div className="row justify-content-center text-lg-start align-items-center bg-secondary rounded-1 mb-4">
        <div className="col-lg-8 col-12 p-2 p-lg-0">
          <h3 className="px-3"> Conceptual $ Strategical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Problem Solving","Innovation","Attention to Details"].map(skill => (
              <span key={skill} className="bg-[#0a192f] px-3 py-1 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-secondary">
          <img src="/17.jpg" className="img-fluid" />

        </div>
      </div>

    </section>


  );
}