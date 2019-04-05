import {User} from '../User';
import {Address} from "../address";


/** return fresh array of test Users */
export function getTestUsers(): User[] {
  return [{
    id: 1,
    name: 'jacob',
    avatar: 'random',
    bio: 'short random bio',
    username: 'jc@ex',
    email: 'iamjacob@jmail.com',
    phone: '432-3221',
    address: {
      street: '221-B backer street',
      suite: 'A1',
      city: 'Alphanso',
      zipcode: '452001',
      geo: {
        lat: '21.21',
        lng: '32.1'
      }
    },
    website: 'serene@example.com',
    company: {
      name: 'Serene',
      catchPhrase: 'Tell me',
      bs: 'k'
    }
  },
    {
      id: 1,
      name: 'jacob',
      avatar: 'random',
      bio: 'short random bio',
      username: 'jc@ex',
      email: 'iamjacob@jmail.com',
      phone: '432-3221',
      address: {
        street: '221-B backer street',
        suite: 'A1',
        city: 'Alphanso',
        zipcode: '452001',
        geo: {
          lat: '21.21',
          lng: '32.1'
        }
      },
      website: 'serene@example.com',
      company: {
        name: 'Serene',
        catchPhrase: 'Tell me',
        bs: 'k'
      }
    }];
}


export function getOneTestUser(): User {
  return {
    id: 1,
    name: 'jacob',
    avatar: 'random',
    bio: 'short random bio',
    username: 'jc@ex',
    email: 'iamjacob@jmail.com',
    phone: '432-3221',
    address: {
      street: '221-B backer street',
      suite: 'A1',
      city: 'Alphanso',
      zipcode: '452001',
      geo: {
        lat: '21.21',
        lng: '32.1'
      }
    },
    website: 'serene@example.com',
    company: {
      name: 'Serene',
      catchPhrase: 'Tell me',
      bs: 'k'
    }
  };
}
