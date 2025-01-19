from rest_framework.test import APITestCase
from rest_framework import status
from .models import User
import uuid

class UserAPITestCase(APITestCase):
    def setUp(self):
        User.objects.create(username="Alice", age=25, hobbies=["painting"])
        User.objects.create(username="Bob", age=40, hobbies=[])

    def test_create_user(self):
        valid_data = {
            "username": "John Doe",
            "age": 30,
            "hobbies": ["reading", "gaming"]
        }
        response = self.client.post('/api/users/', valid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['username'], "John Doe")

        invalid_data = {
            "age": 25,
            "hobbies": ["sports"]
        }
        response = self.client.post('/api/users/', invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_all_users(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_delete_user(self):
        user = User.objects.first()
        response = self.client.delete(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        non_existent_id = uuid.uuid4()
        response = self.client.delete(f'/api/users/{non_existent_id}/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
