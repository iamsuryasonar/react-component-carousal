import ComponentCarousel from "./ComponentCarousel";

const images = [
  1, 2, 3, 4
];

export default function App() {
  return (
    <main style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "black",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div
        style={{
          width: "90%",
          height: "400px",
          backgroundColor: "transparent",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ComponentCarousel
          style={{
            width: '70%',// card size, this is tranformed by 100%
            height: "100%",
            display: "flex",
            transition: "all 700ms",
          }}
          items={images}
        >
          <div style={{
            width: "100%",
            height: "100%",
            padding: '10px 20px',
            backgroundColor: 'yellow',
          }}
          >
            <div style={{
              width: "200px",
              height: "100%",
              backgroundColor: 'green',
            }}
            >
              hello
            </div>
          </div>
        </ComponentCarousel>
      </div >
    </main>
  );
}
