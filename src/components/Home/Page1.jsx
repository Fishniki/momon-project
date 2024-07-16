import { useState } from "react"

const Page1 = () => {

  const [keuangan, setKeuangan] = useState(true)
  const handleKeuangan = () => {
    setKeuangan(!keuangan)
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="w-full">
        <div className="py-8 mx-2 my-2 rounded-xl border-4 border-gray-700">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Selamat Datang di Momon</h1>
        </div>

        <div className="text-center text-xl font-semibold gap-2 flex justify-center py-5">
          <button className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white transition duration-300" onClick={handleKeuangan}>Pemasukan</button>
          <button className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white transition duration-300" onClick={handleKeuangan}>Pengeluaran</button>
        </div>

        {keuangan ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-2">
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-red-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Hari Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-red-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Bulan Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-red-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Tahun Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-red-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Total </h1>
              <p className="text-[15px] font-semibold">Rp. 2.000.000</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-2">
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-green-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Hari Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-green-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Bulan Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-green-500 flex flex-col justify-center items-center rounded-lg shadow-md">
              <h1 className="text-xl font-bold">Tahun Ini</h1>
              <p className="text-[15px] font-semibold">Rp. 4.000.000</p>
            </div>
            <div className="w-full h-[80px] sm:h-[100px] lg:h-[160px] bg-green-500 flex flex-col justify-center items-center rounded-lg shadow-md">
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
