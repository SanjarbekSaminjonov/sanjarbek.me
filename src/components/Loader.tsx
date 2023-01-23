export const Loader = () => {
  let circleCommonClasses = 'h-10 w-10 bg-current rounded-full';

  return (
    <div className='flex'>
      <div className={`${circleCommonClasses} m-5`}></div>
      <div className={`${circleCommonClasses} m-5`}></div>
      <div className={`${circleCommonClasses} m-5`}></div>
    </div>
  );
};