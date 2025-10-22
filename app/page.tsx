import Image from "next/image";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <div style={{
          width: '56px', 
          height: '56px', 
          borderRadius: '10px', 
          background: 'linear-gradient(180deg, #fff, #ffece6)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontWeight: 700, 
          color: '#bf3f2f'
        }}>
          OP
        </div>
        <div>
          <h1>One Piece TCG — Starter Guide</h1>
          <div className="sub">Quick setup, deck building rules, sample decks & play tips to get you playing fast.</div>
        </div>
      </header>

      <div className="grid">
        <main className="panel">
          <section id="start">
            <h2>1) Quick Start — how a game begins</h2>
            <p className="muted">This is a short walkthrough to let you start a friendly match ASAP.</p>
            <ol>
              <li><strong>Choose a Leader:</strong> Your Leader determines the color(s) your deck can use.</li>
              <li><strong>Build a 50-card deck:</strong> Choose only cards that match your Leader&apos;s color(s). Leader cards may have dual colors — if so you can include both colors.</li>
              <li><strong>Shuffle & Draw:</strong> Draw 7 cards. If you don&apos;t like your hand, you may mulligan by shuffling back and drawing 6, 5, ... down to 1.</li>
              <li><strong>Decide First Player:</strong> Use dice/coin to decide who goes first.</li>
              <li><strong>Play:</strong> Follow the turn structure (Draw, Main, Attack, End).</li>
            </ol>
            <div className="card small">
              <strong>Leader color rule (important):</strong>
              <div className="small">You may only include cards that share a color with your Leader. Example: Red Leader → only Red cards; Red/Green Leader → Red and Green cards allowed.</div>
            </div>
          </section>

          <hr style={{margin: '16px 0'}} />

          <section id="deckbuild">
            <h2>2) Building a deck — practical tips</h2>
            <ul>
              <li>Stick to a clear plan: <em>rush/aggression</em> (damage early), <em>midrange/control</em> (value trades), or <em>combo</em>.</li>
              <li>Count your energy/cost curve: include lower cost cards for early pressure and a few higher cost finishers.</li>
              <li>Include draw/search effects and a few removal or bounce effects to handle threats.</li>
              <li>Test and tune: swap weak cards after games — a good starter deck should be tuned by 5–10 changes.</li>
            </ul>
          </section>
        </main>

        <aside className="panel side">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h3 style={{margin: 0}}>Cheat Sheet</h3>
              <div className="small muted">Quick reminders</div>
            </div>
            <div style={{textAlign: 'right'}}>
              <button>Start</button>
            </div>
          </div>

          <hr style={{margin: '12px 0'}} />

          <div className="card">
            <div className="example-card">
              <div style={{flex: 1}}>
                <strong>Leader Rule</strong>
                <div className="small muted">Deck colors must match Leader colors</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div className="color-dot red"></div>
              </div>
            </div>

            <div className="example-card">
              <div style={{flex: 1}}>
                <strong>Deck Size</strong>
                <div className="small muted">Exactly 50 cards (not including Leader)</div>
              </div>
            </div>

            <div style={{marginTop: '10px'}}>
              <div className="small muted">Useful links</div>
              <nav style={{marginTop: '6px'}}>
                <a href="https://en.onepiece-cardgame.com/" target="_blank">Official Site</a>
                <a href="#" style={{marginLeft: '6px'}}>It's expensive</a>
              </nav>
            </div>
          </div>
        </aside>
      </div>

      <footer className="muted">
        Saved this? Great — now go shuffle and play. If you want a downloadable starter deck file or printable deck list, tell me which deck and I&apos;ll prepare it.
      </footer>
    </div>
  )
}
