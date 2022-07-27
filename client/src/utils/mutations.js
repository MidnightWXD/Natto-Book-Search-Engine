import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    description
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($content: saveBookInput!) {
        saveBook(content: $content) {
            user {
                _id
                username
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            token
            user {
                _id
                username
            }
        }
    }
`;

