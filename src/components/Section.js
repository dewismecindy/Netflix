const Section = (props) => {
  return (
    <section>
      <h2>{props.section.category}</h2>
      {/* <img src={element.images[0]} alt="test" /> */}
      <div className="images-container">
        {props.section.images.map((source, index) => {
          return <img src={source} alt="thumbnail" key={index} />;
        })}
      </div>
    </section>
  );
};

export default Section;
