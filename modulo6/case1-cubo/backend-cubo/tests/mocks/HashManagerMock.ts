export class HashManagerMock {
  public hash = async (plaintext: string): Promise<string> => {
    if (plaintext == "asdfg123") {
      return "hash-asdfg123";
    }
    return "hash-mock";
  };
  public compare = async (
    plaintext: string,
    hash: string
  ): Promise<boolean> => {
    if (plaintext == "asdfg123" && hash == "hash-asdfg123") {
      return true;
    }
    return false;
  };
}
