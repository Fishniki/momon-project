import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"

export const Page2 = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <p className="px-4 py-2 text-slate-600 font-semibold">Transaksi Terakhir</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <li className="px-4">
            <div className="w-full bg-red-100 rounded-sm p-3">
              <div>
                <h1 className="text-center font-bold text-slate-600 flex justify-center items-center gap-2">
                  Makan-makan <FaArrowAltCircleUp className="text-xl text-red-400" />
                </h1>
                <p className="text-sm font-serif">Tanggal : 5-11-2024</p>
                <p className="text-sm font-serif">Nominal : 30.000</p>
                <p className="text-sm font-serif">Jenis Transaksi : Pengeluaran</p>
              </div>
            </div>
          </li>
          <li className="px-4">
            <div className="w-full bg-green-100 rounded-sm p-3">
              <div>
                <h1 className="text-center font-bold text-slate-600 flex justify-center items-center gap-2">
                  Gaji Bulanan <FaArrowAltCircleDown className="text-xl text-green-400" />
                </h1>
                <p className="text-sm font-serif">Tanggal : 5-11-2024</p>
                <p className="text-sm font-serif">Nominal : 30.000</p>
                <p className="text-sm font-serif">Jenis Transaksi : Pemasukan</p>
              </div>
            </div>
          </li>
          <li className="px-4">
            <div className="w-full bg-green-100 rounded-sm p-3">
              <div>
                <h1 className="text-center font-bold text-slate-600 flex justify-center items-center gap-2">
                  Gaji Bulanan <FaArrowAltCircleDown className="text-xl text-green-400" />
                </h1>
                <p className="text-sm font-serif">Tanggal : 5-11-2024</p>
                <p className="text-sm font-serif">Nominal : 30.000</p>
                <p className="text-sm font-serif">Jenis Transaksi : Pemasukan</p>
              </div>
            </div>
          </li>
          <li className="px-4">
            <div className="w-full bg-green-100 rounded-sm p-3">
              <div>
                <h1 className="text-center font-bold text-slate-600 flex justify-center items-center gap-2">
                  Gaji Bulanan <FaArrowAltCircleDown className="text-xl text-green-400" />
                </h1>
                <p className="text-sm font-serif">Tanggal : 5-11-2024</p>
                <p className="text-sm font-serif">Nominal : 30.000</p>
                <p className="text-sm font-serif">Jenis Transaksi : Pemasukan</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
