export default function ResourceCard({ title, content, image, alt }) {
  return (
    <div className="fw-screen lex flex-col w-full">
      <div className="overflow-hidden rounded-t-lg">
        <img className="w-full h-64" src={image} alt={alt} />
      </div>
      <div className="px-5 py-4 border-2 overflow-hidden rounded-b-lg">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <p className="truncate text-sm">{content}</p>
      </div>
    </div>
  );
}
