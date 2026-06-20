function AnimationControls({ isDancing, onToggle }) {
  return (
    <div className="animation-controls">
      <button
        type="button"
        className="toggle-button"
        onClick={onToggle}
        aria-pressed={isDancing}
      >
        {isDancing ? '⏸ 춤 멈추기' : '▶ 춤 시작하기'}
      </button>
      <p className="status-text" role="status" aria-live="polite">
        {isDancing ? '고양이가 신나게 춤추고 있어요!' : '고양이가 잠시 쉬고 있어요.'}
      </p>
    </div>
  )
}

export default AnimationControls
