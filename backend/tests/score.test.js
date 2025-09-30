const request = require('supertest');
const app = require('../server'); // path to exported Express app

describe('Quiz Scoring Logic', () => {
  it('should compute correct score', async () => {
    // Simulate answers for your seeded questions
    const answers = [
      { questionId: 1, selectedIndex: 2 }, // Assume correct
      { questionId: 2, selectedIndex: 1 }, // Assume incorrect
    ];
    const res = await request(app)
      .post('/api/submit')
      .send({ answers });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('score');
    expect(res.body).toHaveProperty('total');
    expect(res.body).toHaveProperty('detail');
    expect(res.body.detail.length).toBe(res.body.total);

    // Optionally, check correctness for each detail entry
    expect(typeof res.body.score).toBe('number');
  });
});
