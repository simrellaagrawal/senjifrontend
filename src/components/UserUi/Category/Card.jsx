import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./category.css";
export default function Card() {
  const data = [
    {
      id: 1,
      title: "Land",
      image:
        "https://wallup.net/wp-content/uploads/2019/09/977995-mansion-house-architecture-luxury-building-design.jpg",
    },
    {
      id: 2,
      title: "electronic",
      image:
        "https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg",
    },
    {
      id: 3,
      title: "Furniture",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61i4BLo6vYL._SL1000_.jpg",
    },
    // {
    //   id: 4,
    //   title: "cloths",
    //   image:
    //     "https://th.bing.com/th/id/R.c5c1b96dc6f82dd2fe7a4c69bf19b453?rik=9WrySfGGqW%2f9KQ&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f46%2f2017%2f06%2fclothes.jpg&ehk=qGH4%2fOwj7MJQqSwi0BsTEpm6T%2fqFYOPtN9SWShNi5ik%3d&risl=&pid=ImgRaw&r=0",
    // },
    // {
    //   id: 5,
    //   title: "plastic",
    //   image:
    //     "https://th.bing.com/th/id/R.c5c1b96dc6f82dd2fe7a4c69bf19b453?rik=9WrySfGGqW%2f9KQ&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f46%2f2017%2f06%2fclothes.jpg&ehk=qGH4%2fOwj7MJQqSwi0BsTEpm6T%2fqFYOPtN9SWShNi5ik%3d&risl=&pid=ImgRaw&r=0",
    // },
    {
      id: 6,
      title: "Automobile",
      image:
        "https://th.bing.com/th/id/OIP.WjPJ5TFRmcBtzd7SwMl94gHaFj?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div>
      <Container fluid="lg" className="category">
        <h1 className="top">Categories</h1>
        <hr />
        <Row>
          {data &&
            data.map &&
            data.map((d) => {
              return (
                <>
                  <Col lg={3} md={3} sm={6} key={d.id}>
                    <div className="cate">
                      <img src={d.image}></img>
                      <div className="cate-body">
                        <h1 className="cate-title">{d.title}</h1>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
