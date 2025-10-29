const Hero = () => {
  return (
    <section id="about" className="min-h-[480px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-10 pb-10" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSB72CtJ16i_KVa_iIp9eKzQvgu8sBfaZ9ae5rtn8oXN-Pvlixdw6oZ8IEBYYhgkdcCUkNtF3EPrObvlf4kgvEdklxeN77opSFI4xuDhDWhqmqL4iTJtTKbpnDBhDaJzTlixLtMZUfgT7n10P5T_kXbeL2XxNgc2RKKG6rzjk-vGy426PHwPyO3yW6GvsfKD1IRsf6et-BTfRdXMyVbmXar4lvgkPGNULwlSYAwoJpHaIlgpsNQt9Q5Qsy33rMwZVZth-JoP6CdrC7')"}}>
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em]">
          Gajendra Teli — Building AI That Works in the Real World.
        </h1>
        <h2 className="text-white text-base font-normal leading-normal">
          Data Scientist | MLOps Engineer | AI System Developer.
        </h2>
      </div>
      <div className="flex-wrap gap-3 flex">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-button-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Explore Work</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-button-bg text-white text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Contact Me</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;