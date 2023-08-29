import React from "react";
import Card from "./card/Card";

export default function List() {
  return(
    <>
      {/* <Card /> */}
      <Card
        imageSrc="gambar.jpg"
        title="Judul Kartu"
        description="Ini adalah deskripsi kartu. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        otherInfo={["Info 1: Nilai 1", "Info 2: Nilai 2"]}
      />
    </>
  )
}
