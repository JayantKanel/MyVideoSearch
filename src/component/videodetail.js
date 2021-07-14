import './videodetail.css'
function Detail(props) {
  if (!props.main) {
    return <div>Loading...</div>;
  }
  console.log("Detail mai props", props);
  const videoId = props.main.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
      <div>    
          {/* <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      
     
    <div className="card" >
  <div className="card-body">
    <p className="card-text"><div>{props.main.snippet.title}</div>
        <div>{props.main.snippet.description}</div></p>
  </div>
</div>
    </div> */}
    {/* style="width: 18rem;" */}
    <div className="embed-responsive embed-responsive-1by1">
  <iframe className="embed-responsive-item" src={url} allowfullscreen></iframe>
  <div className="card" >
  <div className="card-body">
    <p className="card-text"><div>{props.main.snippet.title}</div>
        <div>{props.main.snippet.description}</div></p>
  </div>
</div>
</div>
     </div>
  );
}
export default Detail;
