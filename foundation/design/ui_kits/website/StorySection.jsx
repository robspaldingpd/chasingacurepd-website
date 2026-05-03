// StorySection.jsx — "A promise kept" — the founding story
const StorySection = () => (
  <section className="ccpd-story">
    <div className="ccpd-container ccpd-story-grid">
      <div className="ccpd-story-photo" aria-hidden="true" />
      <div className="ccpd-story-copy">
        <div className="ccpd-eyebrow">Our why</div>
        <h2 className="ccpd-display">A promise kept.</h2>
        <p className="ccpd-lead">
          On Christmas morning 2017, our co-founder Wendy received her mother
          Sue's terminal Parkinson's diagnosis. She made a decision that
          morning: to turn grief into action.
        </p>
        <p>
          Chasing a Cure Parkinson's Foundation was founded four months later.
          Sue passed away in December 2018. This foundation is her legacy —
          and the promise we make to every family still waiting.
        </p>
        <blockquote className="ccpd-pullquote">
          "We understand the fear, the grief, and the quiet weight families
          carry while they wait for better answers."
          <cite>— Wendy Chase, Co-founder</cite>
        </blockquote>
      </div>
    </div>
  </section>
);

window.StorySection = StorySection;
