# Error demo

```
~/repo/error-demo(master*) » yarn lint                                                                                                                                                    vvscode@ip-10-10-100-136
yarn run v1.22.4
$ eslint '**/*.{js,ts,tsx}'

/Users/vvscode/repo/error-demo/test.ts
  3:10  error  'isColumnString' is defined but never used  no-unused-vars
  3:25  error  'column' is defined but never used          no-unused-vars
  3:47  error  'column' is not defined                     no-undef
  7:7   error  'x' is assigned a value but never used      no-unused-vars
  9:6   error  'const' is not defined                      no-undef

✖ 5 problems (5 errors, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
------------------------------------

```

https://github.com/typescript-eslint/typescript-eslint/issues/2462