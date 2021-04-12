import './step.css'

const Step = (props) => {
  return (
    <div className="step--wrapper">
      <div className="step--content text-center">
        <div>
          <span className="step--title">Step</span>
          <br />
          <span className="step">{props.step}</span>
        </div>
      </div>
    </div>
  )
}

export default Step
