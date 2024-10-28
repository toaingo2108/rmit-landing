import { QRCodeSVG } from "qrcode.react";

const IDPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary px-2 py-3 rounded-md mt-16">
        <QRCodeSVG value={params.id} level="H" size={160} marginSize={2} />
      </div>
      <p className="mt-4 font-bold text-rmit">ID: {params.id}</p>
    </div>
  );
};

export default IDPage;
