
const renderAboutBody =()=>{
  return(
    <div className="well well-lg">
      <h1>About</h1><br/>
      <p>Make simple motes to keep and share.</p>
      <p>
        <strong>Website made by Muriel Hagge</strong><br></br>
        <a href="mailto:#">mhh5546@rit.edu</a>
      </p><br/>
      <form id="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>

        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>

  );
};

const createAboutPage = function(){

  const AboutClass = React.createClass({
    render: renderAboutBody,
  });

  let galleryRenderer = ReactDOM.render(
    <AboutClass />,
    document.querySelector("#about")
  );
};

const aboutSetup = function(csrf){
  if(document.querySelector("#about")){
    createAboutPage();
  }
};

const getAboutToken = () =>{
  sendAjax('GET', '/getToken', null, (result)=>{
    aboutSetup(result.csrfToken);
  });
};
$(document).ready(function(){
  getAboutToken();
});























