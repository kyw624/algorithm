# 에디터

import sys


class Editor:
    def __init__(self, text):
        self.left_stack = list(text)
        self.right_stack = []

    def rotate(self, direction):
        if direction == 'L':
            if self.left_stack:
                self.right_stack.append(self.left_stack.pop())
        elif direction == 'D':
            if self.right_stack:
                self.left_stack.append(self.right_stack.pop())

    def delete(self):
        if self.left_stack:
            self.left_stack.pop()

    def add(self, char):
        self.left_stack.append(char)


editor = Editor(sys.stdin.readline().strip())

for _ in range(int(sys.stdin.readline().strip())):
    command_line = sys.stdin.readline().split()
    command = command_line[0]
    if len(command_line) > 1:
        alphabet = command_line[1]
    if command == 'L' or command == 'D':
        editor.rotate(command)
    elif command == 'B':
        editor.delete()
    elif command == 'P':
        editor.add(alphabet)

answer = editor.left_stack[:] + editor.right_stack[-1::-1]
sys.stdout.write(''.join(answer))
