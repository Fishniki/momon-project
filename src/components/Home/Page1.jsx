import { useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const Page1 = () => {

  const [keuangan, setKeuangan] = useState(true)
  const handleKeuangan = () => {
    setKeuangan(!keuangan)
  }

  return (
    <div className="min-h-screen  text-white">
      <div className="w-full">
        <div className="py-8 mx-2 my-2 rounded-xl border-4 border-gray-700">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl text-slate-700 font-bold">Selamat Datang di Momon</h1>
        </div>

        <div className="text-center text-xl font-semibold gap-2 flex justify-start px-4 py-2">
          <button className={`px-5 py-2 ${keuangan ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}   rounded-md flex items-center text-white transition duration-300 gap-3`} onClick={handleKeuangan}>{keuangan ? "Pengeluaran" : "Pemasukan"} {keuangan ? <FaArrowUp /> : <FaArrowDown />}</button>
          
        </div>

        {keuangan ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4 py-2">
            <div className="w-full h-[100PX] sm:h-[100px] lg:h-[160px] bg-[#FF7777] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Hari Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[100PX] sm:h-[100px] lg:h-[160px] bg-[#FF7777]  flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Bulan Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[100PX] sm:h-[100px] lg:h-[160px] bg-[#FF7777]  flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Tahun Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[100PX] sm:h-[100px] lg:h-[160px] bg-[#FF7777] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Total </h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4 py-2">
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-[#37B7C3] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Hari Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-[#37B7C3] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Bulan Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-[#37B7C3] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Tahun Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-[#37B7C3] flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Total </h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page1
