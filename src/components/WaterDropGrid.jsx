import * as anime from 'animejs';

const WaterDropGrid = () => {
  return (
    <div className="relative flex justify-center items-center dark:bg-slate-900 px-4 py-10 overflow-auto">
      <DotGrid />
    </div>
  );
};

// Adjust these based on desired responsiveness
const GRID_WIDTH = 20;
const GRID_HEIGHT = 10;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(50, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_HEIGHT; i++) {
    for (let j = 0; j < GRID_WIDTH; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          className="group cursor-crosshair p-2 rounded-full transition-colors hover:bg-slate-600"
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      className={`grid gap-1`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(12px, 1fr))`,
        maxWidth: '100%',
        width: `${GRID_WIDTH * 20}px`, // Adjust width based on dots
      }}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
