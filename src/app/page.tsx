import ProjectsGallery from './sections/ProjectsGallery';
export default function Home() {
  return (
    <>
      <ProjectsGallery />
      <div className="h-[100vh] w-full"></div>
    </>
    // <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
    //   <h1 className="font-ron text-5xl">Welcome to Vanu Software</h1>
    //   <h2 className="text-xl">
    //     This website is under development as I don&apos;t have the time for it,
    //     because of other projects.
    //   </h2>
    //   <h2 className="text-xl">
    //     You can see some of my current work here:{' '}
    //     <a
    //       target="_blank"
    //       className="font-bold hover:text-purple-600 transition-colors"
    //       href="https://apex-smma.com">
    //       Apex SMMA,
    //     </a>{' '}
    //     <a
    //       target="_blank"
    //       className="font-bold hover:text-purple-600 transition-colors"
    //       href="https://www.figma.com/proto/CqCaWUhxSwCOYxwWloCfwJ/FitBar?node-id=0-1&t=gwQ8t8dOdus4o5gI-1">
    //       FitBar
    //     </a>
    //   </h2>
    //   <h2 className="text-xl">
    //     Reach me by sending an email to:{' '}
    //     <a
    //       target="_blank"
    //       className="font-bold hover:text-purple-600 transition-colors"
    //       href="mailto:contact@vanu.software">
    //       contact@vanu.software
    //     </a>
    //   </h2>
    // </div>
  );
}
