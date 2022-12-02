square.n=n*n

cube.n=n*n*n

fib.1=1
fib.2=1
fib.n=fib.(n-1)+fib.(n-2)

sumoflist.[]=0
sumoflist.(x::xs)= x + sumoflist.(xs)

sizeoflist.[]=0
sizeoflist.(x::xs)=1+sizeoflist.xs

firstelement.(x::xs)=x

last_element.[x]=x
last_element.(x::xs)=last_element.(xs)

my_init.[x]=[]                                                  -- Here Init is Predefined
my_init.(x::xs)=x::my_init.(xs)

join_list.[].(y::ys)=y::ys
join_list.(x::xs).(y::ys)=x::join_list.xs.(y::ys)

pq1_third.(x::y::z::xs)=z

pq2_second_last.[x,y]=x
pq2_second_last.(x::xs)=pq2_second_last.(xs)

pq3_sumupto.0=0
pq3_sumupto.n=n+pq3_sumupto.(n-1)

pq4_addfirst.(x::xs).(y::ys)=x+y

pq5_tableof.m.1=[m]
pq5_tableof.m.n=pq5_tableof.m.(n-1) ++ [(m*n)]

pq6_hbt.[].n=0                                    
pq6_hbt.(x::xs).n = if (x>n) then 1 + a.xs.n  else  a.xs.n where a = pq6_hbt

pq8_re.[]=[]
pq8_re.(x::xs)= if(rem.(x).2==0) then 100::pq8_re.xs else x::pq8_re.xs

pq8a_re.[]=[]
pq8a_re.(x::xs)= if(rem.(x).2==0) then 100::pq8a_re.xs else x::pq8a_re.xs

pq9_rol.[]=[]
pq9_rol.(x::xs)=if (rem.(sizeoflist.x).2 == 0) then x::pq9_rol.(xs) else pq9_rol.xs

--pq10
comparelist.[].[]=[]
comparelist.(x::xs).(y::ys)=if (x<y) then 0::comparelist.xs.ys else 1::comparelist.xs.ys

pq11_reverseaddone.[]=[]
pq11_reverseaddone.(x::xs) =  pq11_reverseaddone.xs ++ [x+1]

pq12_func.n=(n*2)+3

--pq13
small.[x]=x
small.(x::y::xs)=if (x>y) then small.(y::xs) else small.(x::xs)

--pq14 (basic)
largestofall.[]=[]
largestofall.(x::ys)=(largest.x)::largestofall.ys

largest.[x]=x
largest.(x::y::xs) = if (x>y) then largest.(x::xs) else largest.(y::xs)

--pq14
slargestofall.[]=[]
slargestofall.(x::ys)=(secondlargest.x)::slargestofall.ys

secondlargest.[x,y]= if (x<y) then x else y
secondlargest.(x::y::xs)= if (x>y) then secondlargest.(x::xs) else secondlargest.(y::xs) 

--pq15
factor2.n=fact.(n).(n)
fact.(x).0=[]
fact.(x).(y)=if (rem.x.y==0) then fact.x.(y-1) ++ [y] else fact.x.(y-1)

--pq16 (joining two list)

joinlist.[].(y::ys)=y::ys
joinlist.(x::xs).(y::ys)=x::joinlist.xs.(y::ys)

--pq16 (joining three list)

join3list.[].(y::ys).(z::zs)=joinlist.(y::ys).(z::zs)
join3list.(x::xs).(y::ys).(z::zs)=x::join3list.xs.(y::ys).(z::zs)

--pq17
collatz.1=[1]
collatz.n=n::( if (rem.n.2 == 0) then collatz.(n/2) else collatz.(3*n +1) )

--pq19
listsize4.x=if (rem.(sizeoflist.x).4 == 0) then True else False








-- My Self Practice Questions by Own

pro_list.[]=1
pro_list.(x::xs)=pro_list.(xs) * x

sumodd.[]=0
sumodd.[x]=x
sumodd.[x,y]=x
sumodd.(x::y::xs)=x+sumodd.xs

removeodd.[]=[]
removeodd.[x]=[]
removeodd.(x::y::xs)=y::removeodd.xs

removeeven.[]=[]
removeeven.[x]=[x]
removeeven.(x::y::xs)=x::removeeven.xs










-- Section A

nth.(x::xs).1=x
nth.(x::xs).n=nth.(xs).(n-1)

listUpto.0=[]
listUpto.n=listUpto.(n-1)++[n]

jL.[].x=x
jL.(x::xs).(y::ys)=x::jL.xs.(y::ys)

sumpro.[].[]=0
sumpro.(x::xs).(y::ys)= (x*y) + sumpro.xs.ys

myfact1.(a).(0)=[]
myfact1.a.b = if (rem.a.b == 0) then (myfact1.a.(b-1)++[b]) else myfact1.a.(b-1)

factor.n = myfact1.n.n

supersum.[]=[]
supersum.(x::xs) = sumoflist.(x::xs)::(supersum.xs) 


bigf.(x::y::xs)=smallf.(x::y::xs)++[0]

smallf.[x,y]=[y-x]
smallf.(x::y::xs)=(y-x)::smallf.(y::xs)


--Q5 (basic)
r1time.(x::xs)= xs++[x]

--Q5
rntime.(x::xs).1=xs++[x]
rntime.(x::xs).n=rntime.xs.(n-1) ++ [x]


-- Section B :

-- Q7
reminder.(x).(y) = if (x>y) then reminder.(x-y).y else if (x==y) then 0 else x

-- Q8

--lrange.0.0=[]
--lrange.x.y= if(x!=y) then lrange.x.(y-1) ++ [y] else lrange.0.0











