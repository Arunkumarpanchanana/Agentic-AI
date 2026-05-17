const KEY = 'agentic_ai_progress';
const TOTAL = 25;

const Progress = {
  getAllProgress() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  },
  save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  },
  getSession(id) {
    const all = this.getAllProgress();
    return all[id] || { viewed: false, quizPassed: false, quizScore: 0 };
  },
  markViewed(id) {
    const all = this.getAllProgress();
    all[id] = { ...this.getSession(id), viewed: true };
    this.save(all);
  },
  markQuizPassed(id, score) {
    const all = this.getAllProgress();
    all[id] = { ...this.getSession(id), quizPassed: true, quizScore: score };
    this.save(all);
  },
  getCompletedCount() {
    const all = this.getAllProgress();
    return Object.values(all).filter(s => s.viewed || s.quizPassed).length;
  },
  getCompletionPercent() {
    return Math.round((this.getCompletedCount() / TOTAL) * 100);
  },
  reset() {
    localStorage.removeItem(KEY);
  }
};

window.Progress = Progress;
