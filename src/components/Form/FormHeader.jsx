import Card from "../UI/Card";

function FormHeader() {
  return (
    <Card>
      <div className="flex items-center space-x-10">
        <div className="bg-gray-200 rounded-full h-28 w-28 border-2 border-black flex items-center justify-center overflow-hidden">
          
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">Form Name</h1>
          <p className="text-sm mt-2">Description</p>
        </div>
      </div>
    </Card>
  );
}

export default FormHeader;
