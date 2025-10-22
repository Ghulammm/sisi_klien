import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard
           name="Rizal"
           email="111202314912@mhs.dinus.ac.id"
           street="Jl. Kyai Singkil"
           city="Demak"
           />

          <UserCard
           name="Nugrahanto"
           email="111202314912@mhs.dinus.ac.id"
           street="Jl. Pemuda"
           city="Semarang"
           />

          <UserCard
           name="Gantenk"
           email="111202314912@mhs.dinus.ac.id"
           street="Jl. Tembus"
           city="Kudus"
           />
        </div>
      </div>
    </>
  );
}

export default Exercise;