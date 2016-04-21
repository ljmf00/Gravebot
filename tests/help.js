import chai from 'chai';

import help from '../src/commands/help';
import meme from '../src/commands/help/meme';


chai.should();

describe('help', () => {
  describe('memelist', () => {
    describe('1', () => {
      it('should return the correct help text', done => {
        let testcount = 0;

        function sendMessage(res) {
          testcount++;
          if (testcount === 1) res.should.equal(meme.list1);
          if (testcount === 2) done();
        }

        const client = {
          Users: {
            get: () => ({
              openDM: () => Promise.resolve({sendMessage})
            })
          }
        };

        const evt = {
          message: {
            author: {
              id: 1234
            }
          }
        };

        return help.memelist(client, evt);
      });
    });

    describe('2', () => {
      it('should return the correct help text', done => {
        let testcount = 0;

        function sendMessage(res) {
          testcount++;
          if (testcount === 1) res.should.equal(meme.list1);
          if (testcount === 2) done();
        }

        const client = {
          Users: {
            get: () => ({
              openDM: () => Promise.resolve({sendMessage})
            })
          }
        };

        const evt = {
          message: {
            author: {
              id: 1234
            }
          }
        };

        return help.memelist(client, evt);
      });
    });

    describe('3', () => {
      it('should return the correct help text', done => {
        let testcount = 0;

        function sendMessage(res) {
          testcount++;
          if (testcount === 1) res.should.equal(meme.list1);
          if (testcount === 2) done();
        }

        const client = {
          Users: {
            get: () => ({
              openDM: () => Promise.resolve({sendMessage})
            })
          }
        };

        const evt = {
          message: {
            author: {
              id: 1234
            }
          }
        };

        return help.memelist(client, evt);
      });
    });

    describe('full', () => {
      it('should return the correct help text', done => {
        let testcount = 0;

        function sendMessage(res) {
          testcount++;
          if (testcount === 1) res.should.equal(meme.list1);
          if (testcount === 2) done();
        }

        const client = {
          Users: {
            get: () => ({
              openDM: () => Promise.resolve({sendMessage})
            })
          }
        };

        const evt = {
          message: {
            author: {
              id: 1234
            }
          }
        };

        return help.memelist(client, evt);
      });
    });

    describe('none', () => {
      it('should return the correct help text', done => {
        const evt = {
          message: {
            channel: {}
          }
        };
        return help.memelist({}, evt)
        .then(res => res.should.equal(meme.all));
      });
    });
  });
});
