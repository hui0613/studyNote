class Soluation:
    def get_nums(self, n):
        if n == 1:
            return 0
        if n == 2:
            return 1
        a = 1
        b = 1
        res = 0
        sums = 2
        pro_sums = 2
        while sums < n:
            res = a + b
            sums += res
            if sums >= n:
                return pro_sums
            pro_sums = sums
            a = b
            b = res
        return pro_sums


s = Soluation()
print(s.get_nums(567161432008720451))