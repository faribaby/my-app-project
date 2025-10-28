 "use client";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: "/8.jpeg",
      title: "Where passion meets perfection.",
      desc:"We believe food should be a beautiful experience. Each meal is carefully prepared with passion, combining fresh ingredients to create dishes that satisfy both the eyes and the taste buds.",
      price: "₦3,500",
    },
    {
      img: "/5.jpg",
      title: "Every dish holds a memory.",
      desc: "A traditional favourite — creamy arish paired with a rich, savory sauce that brings warmth and comfort to every bite.",
      price: "₦6,000",
    },
    {
      img: "/9.jpeg",
      title: "A slice of happiness.",
      desc: "A golden crust topped with melted cheese, fresh veggies, and your favorite toppings — baked hot and fresh for that irresistible taste.",
      price: "₦15,000",
    },
    {
      img: "/12.png",
      title: "Cake, baked with love.",
      desc: "Our cakes are made from the finest ingredients and a touch of warmth — perfect for every celebration.",
      price: "₦19,000",
    },
    {
      img: "/j.png",
      title: "Juice World.",
      desc: "A refreshing mix of tropical fruits — naturally sweet, energizing, and full of flavor.",
      price: "₦2,000",
    },
     {
      img: "/meat pie.jpg",
      title: "The taste of togetherness.",
      desc: "Our snacks are perfect for quick bites and friendly moments — made to share and enjoy.",
      price: "₦3,500",
    },
     {
      img: "/cake straw.png",
      title: "The taste of togetherness.",
      desc:"We believe food should be a beautiful experience. Each meal is carefully prepared with passion, combining fresh ingredients to create dishes that satisfy both the eyes and the taste buds.",
      price: "₦23,000",
    },
     {
      img: "/burger.jpeg",
      title: "The taste of togetherness.",
      desc: "Our snacks are perfect for quick bites and friendly moments — made to share and enjoy.",
      price: "₦5,000",
    },

     {
      img: "/14.jpg",
      title: "The taste of togetherness.",
      desc: "Our snacks are perfect for quick bites and friendly moments — made to share and enjoy.",
      price: "₦2,500",
    },
     {
      img: "/popcorn.png",
      title: "The taste of togetherness.",
      desc: "Our snacks are perfect for quick bites and friendly moments — made to share and enjoy.",
      price: "₦1,500",
    },
  ];

  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3>03.</h3>
        <h4>My Projects</h4>
      </div>

      <div className="row justify-content-center align-items-center text-light">
        {projects.map((project, i) => (
          <div key={i} className="col-lg-4">
            <div className="card rounded-0 h-100 shadow my-4 rounded-3">
              <img src={project.img} className="card-img-top " alt={project.title} />
              <div className="card-body">
                <h5 className="fw-bold my-2 ">{project.title}</h5>
                <p className="text-truncate">{project.desc.substring(0, 90)}...</p>
                <p className="fw-bold text-dark">{project.price}</p>
                <button
                  className="btn btn-warning btn-bm rounded-4"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light border-0 rounded-3 shadow-lg">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <p>{selectedProject.desc}</p>
                <h5 className="text-warning fw-bold mt-3">
                  {selectedProject.price}
                </h5>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  className="btn btn-outline-light rounded-4 px-4"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
