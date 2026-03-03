import "../../styles/Logo.css";

export const Logo = ({ type = 'primary' }: { type?: 'primary' | 'tertiary' }) => {
  return (
    <div className="pangea-logo-container">
      <span
        className={
          type === "tertiary"
            ? "pangea-logo-text pangea-logo-text-tertiary"
            : "pangea-logo-text pangea-logo-text-primary"
        }
      >
        Pangea.
      </span>
      <span className="pangea-logo-circle pangea-logo-circle-1" />
      <span className="pangea-logo-circle pangea-logo-circle-2" />
      <span className="pangea-logo-circle pangea-logo-circle-3" />
    </div>
  );
};
