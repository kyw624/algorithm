# 덱

import collections


class Deque:
    def __init__(self):
        self.arr = collections.deque()

    def push_front(self, num):
        self.arr.appendleft(num)

    def push_back(self, num):
        self.arr.append(num)

    def pop_front(self):
        if self.arr:
            return self.arr.popleft()
        else:
            return -1

    def pop_back(self):
        if self.arr:
            return self.arr.pop()
        else:
            return -1

    def size(self):
        return len(self.arr)

    def empty(self):
        if self.arr:
            return 0
        else:
            return 1

    def front(self):
        if self.arr:
            return self.arr[0]
        else:
            return -1

    def back(self):
        if self.arr:
            return self.arr[-1]
        else:
            return -1


N = int(input())
dq = Deque()
answer = []

for _ in range(N):
    command_line = input().split()
    command = command_line[0]
    if len(command_line) > 1:
        value = int(command_line[1])
    if command == 'push_front':
        dq.push_front(value)
    elif command == 'push_back':
        dq.push_back(value)
    elif command == 'pop_front':
        answer.append(dq.pop_front())
    elif command == 'pop_back':
        answer.append(dq.pop_back())
    elif command == 'size':
        answer.append(dq.size())
    elif command == 'empty':
        answer.append(dq.empty())
    elif command == 'front':
        answer.append(dq.front())
    elif command == 'back':
        answer.append(dq.back())

for i in answer:
    print(i)
