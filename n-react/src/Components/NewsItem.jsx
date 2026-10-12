import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
const fallbackImage =
  "https://runway-media-production.global.ssl.fastly.net/us/originals/2025/06/American-Flagship-Suite-Preferred-Inaugural-47.jpg";

const NewsItem = ({ technologyArticles, cultureArticles, scienceArticles, videoArticles }) => {

  const mainArticle = technologyArticles[0];
  const sideArticles = technologyArticles.slice(1, 4);
  const cultureToShow = cultureArticles.slice(0, 3);
  const scienceToShow = scienceArticles.slice(0, 4);
  const leadArticle = videoArticles[0]; 
  const videoToShow = videoArticles.slice(1, 4);

  return (
    <Container>
      {/* Main Headline Section */}
      <Row>
        <Col md={8}>
          <Card className="mb-6 border-0 rounded-0">
            <Card.Img variant="right" src={mainArticle?.urlToImage || fallbackImage} />
            <Card.Body>
              <p className='text-left fw-bold text-danger'> Technology</p>
              <Card.Title style={{ fontSize: '2rem' }}>{mainArticle?.title}</Card.Title>
              <span className='text-left'>by Pete Sariya</span>
            </Card.Body>
          </Card>
        </Col>

        {/* Right-Side Headlines */}
        <Col md={4}>
          {sideArticles.map((article, index) => (
            <Card className="mb-3 rounded-0 border-0" key={index}>
              <div className="d-flex" style={{ height: '200px' }}>
                <div style={{ width: '350%', height: '100%', margin: "2%", overflow: 'hidden' }}>
                  <Card.Img
                    src={article?.urlToImage || fallbackImage}
                    alt="news"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Card.Body className="p-2 d-flex flex-column justify-content-between" style={{ width: '180%' }}>
                  <p className="text-danger fw-bold mb-1" style={{ fontSize: '0.75rem' }}>Technology</p>
                  <Card.Title className="fw-bold" style={{ fontSize: '1.2rem' }}>
                    {article?.title ? article?.title.slice(0, 45) : ''}
                  </Card.Title>
                  <small className="text-muted">by Pete Sariya</small>
                </Card.Body>
              </div>
            </Card>
          ))}
        </Col>
      </Row>

      <hr style={{ borderTop: '4px solid black' }} />

      {/* Arts & Culture Section */}
      <Row className="mt-4">
        <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1>Arts & Culture</h1>
        <a className='fw-bold text-dark'>See All</a></div>
        {cultureToShow.map((article, index) => (
          <Col md={4} key={index} className="d-flex">
            <Card className="my-3 border-0 w-100 h-100">
              <Card.Img
                variant="top"
                src={article?.urlToImage || fallbackImage}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <p className="text-danger fw-bold mb-1">Culture</p>
                <Card.Title style={{ fontSize: '1.7rem' }}>{article?.title ? article?.title.slice(0, 55) : ''}</Card.Title>
                <span className="text-muted">by Pete Sariya</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <hr style={{ borderTop: '4px solid black' }} />

      {/* Science Section */}
      <Row className="mt-4">
        <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1 className="mb-4">Science Update</h1>
         <a className='fw-bold text-dark'>See All</a></div>
        {scienceToShow.map((article, index) => (
          <Col md={3} key={index} className="d-flex">
            <Card className="my-3 border-0 w-100 h-100">
              <Card.Img
                variant="top"
                src={article?.urlToImage || fallbackImage}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <p className="text-danger fw-bold mb-2">Science Update</p>
                <Card.Title fw-bold style={{ fontSize: '1.6rem' }}>
                  {article?.title ? article?.title.slice(0, 55) : ''}
                </Card.Title>
                <span className="text-muted">by Pete Sariya</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <hr style={{ borderTop: '4px solid black' }} />

      {/* Video Gallery Section */}
      <Row style={{background:"black"}}className="mt-5  p-4">
        <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1 className='text-white'>Video Gallery</h1>
         <a className='fw-bold text-white'>See All</a></div>
        <Col md={8}>
          <Card  style={{background:"black"}} className="mb-5 border-0  text-white">
            <Card.Img variant="top" src={leadArticle?.urlToImage || fallbackImage} />
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>{leadArticle?.title}</Card.Title>
              <span className='text-left'>by Pete Sariya</span>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {videoToShow.map((article, index) => (
            <Card className="mb-3 border-0 text-white" style={{background:"black"}} key={index}>
              <div className="d-flex" style={{ height: '180px' }}>
                <div style={{ width: '200%', overflow: 'hidden', margin: "3%" }}>
                  <Card.Img
                    src={article?.urlToImage || fallbackImage}
                    style={{ width: '150%', height: '100%', objectFit: 'cover' }}
                    alt="video thumbnail"
                  />
                </div>
                <Card.Body className="p-1" style={{ width: '200%' }}>
                  <p className="text-secondary fw-bold mb-1 " style={{ fontSize: '0.75rem' }}> <i className='far fa-clock mx-2'></i>5.56</p>
                  <Card.Title className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>
                    {article?.title ? article?.title.slice(0, 45) : ''}
                  </Card.Title>
                  <small className="text-white">by Pete Sariya</small>
                </Card.Body>
              </div>
            </Card>
          ))}
        </Col>
      </Row>

      <hr style={{ borderTop: '4px solid black' }} />
    </Container>
  );
};

export default NewsItem;
