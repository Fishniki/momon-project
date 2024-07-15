import { useState } from "react"

 const Page1 = () => {

  const [keuangan, setKeuangan] = useState(true)
  const handleKeuangan = () => {
    setKeuangan(!keuangan)
  }

  return (
    <div className="">
        <div className="w-full">
            <div className="py-8 mx-2 my-2 rounded-xl border-2 bg-slate-200">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Selamat Datang di Momon</h1>
            </div>

            <div className="text-center text-xl font-semibold gap-2 flex justify-center py-5">
              <button className="px-5 py-2 bg-green-500 rounded-md text-white" onClick={handleKeuangan}>Pemasukan</button>
              <button className="px-5 py-2 bg-red-500 rounded-md text-white" onClick={handleKeuangan}>Pengeluaran</button>
            </div>

            {keuangan ? (
               <div className="grid grid-cols-3  justify-center sm:flex gap-5 px-4 py-2">
               <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-red-300 flex flex-col justify-center items-center rounded-sm">
                 <h1 className="text-xl font-bold">Hari Ini</h1>
                 <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
               </div>
               <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-red-300 flex flex-col justify-center items-center rounded-sm">
                 <h1 className="text-xl font-bold">Bulan Ini</h1>
                 <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
               </div>
               <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-red-300 flex flex-col justify-center items-center rounded-sm">
                 <h1 className="text-xl font-bold">Tahun Ini</h1>
                 <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
               </div>
               <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-red-300 flex flex-col justify-center items-center rounded-sm">
                 <h1 className="text-xl font-bold">Total </h1>
                 <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
               </div>
             </div>
            ) : 
            (
              <div className="grid grid-cols-3  justify-center sm:flex gap-5 px-4 py-2">
              <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-green-300 flex flex-col justify-center items-center rounded-sm">
                <h1 className="text-xl font-bold">Hari Ini</h1>
                <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
              </div>
              <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-green-300 flex flex-col justify-center items-center rounded-sm">
                <h1 className="text-xl font-bold">Bulan Ini</h1>
                <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
              </div>
              <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-green-300 flex flex-col justify-center items-center rounded-sm">
                 <h1 className="text-xl font-bold">Tahun Ini</h1>
                 <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
               </div>
              <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[240px] lg:h-[160px] bg-green-300 flex flex-col justify-center items-center rounded-sm">
                <h1 className="text-xl font-bold">Total </h1>
                <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
              </div>
            </div>
            )
            }

           
        </div>
    </div>
  )
}

export default Page1