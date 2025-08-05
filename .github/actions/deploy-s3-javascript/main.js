import { notice } from '@actions/core';
import core from '@actions/github';
import core from '@actions/exec';

function run() {
  notice('Hello from my custom JavaScript Action!');
}

run();
